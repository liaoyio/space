import { ThemeSwitcher } from '@/app/(ai)/ai/components/toggles/theme';

export default function Page() {
  return (
    <div className="space-y-6">
      <div className="lg:flex lg:items-start lg:gap-8">
        <div className="w-full space-y-1 lg:w-56 xl:w-full xl:max-w-xs">
          <p className="text-base font-medium text-gray-950 dark:text-white">Basic Details</p>
          <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
            Your account information
          </p>
        </div>
        <div className="mt-4 max-w-[720px] lg:mt-0 lg:min-w-0 lg:flex-1">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-950 dark:text-white"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  readOnly
                  className="focus:ring-primary-500 block w-full rounded-sm border-0 bg-white px-3 py-1.5 text-gray-950 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-200 placeholder:text-gray-400 hover:bg-gray-50 focus:ring-2 focus:ring-inset dark:bg-gray-900 dark:text-white dark:ring-gray-700 dark:hover:bg-gray-800 sm:text-sm sm:leading-6"
                  type="text"
                  value="Yi oaiL"
                  name="name"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-950 dark:text-white"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  readOnly
                  className="focus:ring-primary-500 block w-full rounded-sm border-0 bg-white px-3 py-1.5 text-gray-950 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-200 placeholder:text-gray-400 hover:bg-gray-50 focus:ring-2 focus:ring-inset dark:bg-gray-900 dark:text-white dark:ring-gray-700 dark:hover:bg-gray-800 sm:text-sm sm:leading-6"
                  type="email"
                  value="a2417276459@gmail.com"
                  name="email"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-200 dark:border-gray-700" />
      <div className="lg:flex lg:items-start lg:gap-8">
        <div className="w-full space-y-1 lg:w-56 xl:w-full xl:max-w-xs">
          <p className="text-base font-medium text-gray-950 dark:text-white">Appearance</p>
          <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
            Choose a theme to customize your experience
          </p>
        </div>
        <div className="mt-4 max-w-[720px] lg:mt-0 lg:min-w-0 lg:flex-1">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}
