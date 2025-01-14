const getPredictionAge = async (name : string) => {
  const res = await fetch(`https://api.agify.io/?name=${name}`);
  return res.json();
}
const getPredictionGender = async (name : string) => {
  const res = await fetch(`https://api.genderize.io/?name=${name}`);
  return res.json();
}
const getPredictionCountry = async (name : string) => {
  const res = await fetch(`https://api.nationalize.io/?name=${name}`);
  return res.json();
}

interface Params{
  params:{ name : string };
}

export default async function Page({params} : Params ) {

  const [age, gender, country  ] = await Promise.all([
    getPredictionAge(params.name),
    getPredictionGender(params.name),
    getPredictionCountry(params.name)
  ]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen font-bold text-[35px]">
      <div className="bg-white py-9 px-32 rounded-xl text-black text-center shadow-[0_10px_100px_rgb(0,0,0,0.2)] shadow-gray-500">
        <div className="text-red-400">I bet your details are:</div>
        <div>Age: {age?.age}</div>
        <div>Gender: {gender?.gender}</div>
        <div>Country: {country?.country[0]?.country_id}</div>
      </div>
    </div>
  );
}
