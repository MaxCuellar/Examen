import { useEffect, useState } from "react";
import { getData } from "@/helpers/getData";
import { columns } from "../posts/columns";
import { DataTable } from "../posts/data-table";
import { Post } from "../posts/columns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



export const CRUD = () => {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container mx-auto py-10">
        {loading ? (
          <p>Cargando datos...</p>
        ) : (
          <DataTable columns={columns} data={data} />
        )}   
      </div>
    </>
  );
};
