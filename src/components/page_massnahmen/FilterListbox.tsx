import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

type Props = {
  filter: { value: string; label: string }
  setFilter: (v: { value: string; label: string }) => void
  options: { value: string; label: string }[]
}

export const FilterListbox = ({ filter, setFilter, options }: Props) => {
  return (
    <Listbox value={filter} onChange={setFilter}>
      <div className="relative mt-2">
        <ListboxButton className="relative w-full cursor-pointer rounded-sm bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-beige-600 sm:text-sm sm:leading-6">
          <span className="block truncate">{filter.label}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-black" />
          </span>
        </ListboxButton>
        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-sm bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {options.map((option) => (
            <ListboxOption
              key={option.label}
              value={option}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-beige-600 data-[focus]:text-white"
            >
              <span className="block truncate font-normal group-data-[selected]:font-semibold">
                {option.label}
              </span>
              <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-beige-600 group-data-[selected]:block group-data-[focus]:text-white">
                <CheckIcon aria-hidden="true" className="h-5 w-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  )
}
