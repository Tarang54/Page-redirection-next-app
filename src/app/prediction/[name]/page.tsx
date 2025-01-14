interface Params{
  params:{ name : string };
}

export default function Page({params} : Params ) {
  return (
    <div className="flex justify-center items-center min-h-screen font-bold text-[50px]">
        {""}
        Hey {params.name}!
    </div>
  );
}
