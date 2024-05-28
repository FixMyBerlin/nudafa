export const SmallSpinner = () => {
  return (
    <span className="border-b-transparent box-border inline-block h-5 w-5 animate-[spin_0.5s_linear_infinite] rounded-full border-2 border-gray-500">
      <span className="sr-only">Daten werden geladen…</span>
    </span>
  )
}
