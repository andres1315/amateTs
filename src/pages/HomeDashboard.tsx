import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { useStatsHome } from '../hooks/useStatsHome'

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

export const HomeDashboard: React.FC = () => {
  const { statHome } = useStatsHome()

  return (
    <div className="bg-gray-100/70 px-8 pt-2 h-screen">
      <h3 className="text-base font-semibold leading-6 text-gray-700">
        Mes Actual / Mes Anterior
      </h3>
      <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-x md:divide-y-0">
        {statHome.map((item) => (
          <div key={item.name} className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-gray-900">{item.name}</dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-rose-600">
                {item.stat.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 })}
                {
                  item.previousStat !== undefined && (
                    <span className="ml-2 text-sm font-medium text-gray-500">
                      anterior {item.previousStat.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 })}
                    </span>
                  )
                }
              </div>

              <div
                className={classNames(
                  item.changeType === 'increase'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800',
                  'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0'
                )}
              >
                {item.changeType === 'increase'
                  ? (
                  <ArrowUpIcon
                    className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                    aria-hidden="true"
                  />
                    )
                  : (
                  <ArrowDownIcon
                    className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
                    aria-hidden="true"
                  />
                    )}

                <span className="sr-only">
                  {' '}
                  {item.changeType === 'increase'
                    ? 'Increased'
                    : 'Decreased'}{' '}
                  by{' '}
                </span>
                {item.change}
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
