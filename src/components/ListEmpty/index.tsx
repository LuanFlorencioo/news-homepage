import Card from "./Card";

export default function ListEmpty() {
  return (
    <div className="w-full flex flex-wrap justify-center gap-10">
      <Card />
      <Card />
      <Card />
    </div>
  )
}
