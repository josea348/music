import {Card, CardBody} from "@nextui-org/react";

export default function CardUsage({className, children}) {
  return (
    <Card className={className}>
      <CardBody>
        {children}
      </CardBody>
    </Card>
  );
}
