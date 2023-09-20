export default function Card() {
  return (
    <div className="w-full max-w-sm h-[150px] px-5 py-3 border-2 border-gray-300">
      <div className="w-full flex flex-wrap gap-5 justify-between items-center animate-pulse">
        <div className="w-full max-w-[30px] h-[30px] bg-gray-200">
        </div>

        <div className="w-full max-w-[200px] h-[30px] bg-gray-300">
        </div>

        <div className="w-full flex flex-col gap-3">
          <div className="w-full h-1 bg-gray-300" />
          <div className="w-full h-1 bg-gray-300" />
          <div className="w-full max-w-[30px] h-1 bg-gray-300" />
        </div>

        <div className="w-full flex justify-center">
          <div className="w-[60px] h-1 bg-gray-300" />
        </div>
      </div>
    </div>
  )
}
