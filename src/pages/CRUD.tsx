// import { useEffect, useState } from "react";
import { columns, } from "@/components/DataTable/columns";
import { DataTable } from "@/components/DataTable/data-table";
import { CreateRegisterDialog } from "@/components/Dialog/createRegisterDialog";
// import { Button } from "@/components/ui/button";
import { useFetch } from "@/hooks/useFetch";

export const CRUD = () => {
  const url = `https://67bb8b11ed4861e07b37aba9.mockapi.io/Crud`;

  // const [data, setData] = useState<Post[]>([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await getData();
  //     setData(result);
  //     setLoading(false);
  //   };

  //   fetchData();
  // }, []);

  const { data, isLoading } = useFetch(url)

  return (
    <>
      <div className="container mx-auto py-10">
        {isLoading ? (
          <p>Cargando datos...</p>
        ) : (
          <>
            <div className="flex justify-end mb-4">
              <CreateRegisterDialog/>
            </div>
            <DataTable columns={columns} data={data}/>
          </>
        )}
      </div>
    </>
  );
};
