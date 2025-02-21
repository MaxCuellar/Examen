import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export const StaticList = () => {
  const names = ["Lucas", "Martina", "Santiago", "Valentina", "Javier", "Camila", "Mateo", "Isabella", "Andrés", "Florencia"];

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {names.map((name,index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>Person {index + 1}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{name}</p>
            </CardContent>
          </Card>
        ))}
      </div >
    </>
  )
}
