import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@heroui/react";
import { GrResources } from "react-icons/gr";
import resourceData from "@/public/resourceData.json";

export default function ResourcesPage() {
  const { institutions } = resourceData;

  return (
    <div className="container mx-auto px-4">
      <h1 className={`${title()} text-center mb-12`}>Resources</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {institutions.map((institution) => (
          <Card key={institution.name} className="max-w-[400px] mx-auto">
            <CardHeader className="flex gap-3">
              <Image
                alt={`${institution.name} logo`}
                height={40}
                radius="sm"
                src={institution.logoSrc}
                width={40}
              />
              <div className="flex flex-col justify-start items-start">
                <p className="text-md font-semibold">{institution.name}</p>
                <p className="text-small text-default-500">{institution.fullName}</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p className="text-sm">{institution.description}</p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link 
                href={institution.link.url}
                className="flex items-center text-primary hover:underline"
              >
                <span className="mr-1">Explore now</span>
                <GrResources className="mt-1" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}