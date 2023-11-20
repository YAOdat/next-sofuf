import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { GrResources } from "react-icons/gr";
import resourceData from "@/public/resourceData.json";

export default function ResourcesPage() {
  const { institutions } = resourceData;

  return (
    <div>
      <h1 className={title()}>Resources</h1>
      {institutions.map((institution) => (
        <Card key={institution.name} className="max-w-[400px] mt-4">
          <CardHeader className="flex gap-3">
            <Image
              alt={`${institution.name} logo`}
              height={40}
              radius="sm"
              src={institution.logoSrc}
              width={40}
            />
            <div className="flex flex-col justify-start items-start">
              <p className="text-md">{institution.name}</p>
              <p className="text-small text-default-500">{institution.fullName}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{institution.description}</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link href={institution.link.url}>
              <span className="mr-1">Explore now</span>
              <GrResources className="mt-1" />
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
