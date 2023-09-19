export default function Button({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <button className="w-max h-10 px-7 bg-red font-text-button text-gray-400 transition md:hover:bg-gray-100">
      {children}
    </button>
  )
}
