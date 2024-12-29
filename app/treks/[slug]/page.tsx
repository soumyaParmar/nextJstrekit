import Trekdetail from '@/components/Trekdetail';
import { treksData } from '@/data/TrekData';

export function generateStaticParams() {
  return Object.keys(treksData).map(slug => ({ slug }));
}

export default function TrekDetail({params}:{params:{slug:string}}) {

  const trek = treksData[params.slug as keyof typeof treksData];

  if (!trek) {
    return <div>Trek not found</div>;
  }

  return (
    <Trekdetail trek={trek}/>
  );
}