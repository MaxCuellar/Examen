import { useEffect, useState } from "react";
import { columns, Post, } from "@/components/DataTable/columns";
import { DataTable } from "@/components/DataTable/data-table";
import { CreateRegisterDialog } from "@/components/Dialogs/createRegisterDialog";
import { getData } from "@/helpers/crudOperations/crudOperations.ts";

export const CRUD = () => {

  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const result = await getData();
    setData(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="mx-auto container">
        {loading ? (
          <p>Cargando datos...</p>
        ) : (
          <div className="">
            <div className="flex justify-end mb-4">
              <CreateRegisterDialog fetchData={fetchData} />
            </div>
            <DataTable columns={columns(fetchData)} data={data} />
          </div>
        )}
      </div>
    </>
  );  
};
