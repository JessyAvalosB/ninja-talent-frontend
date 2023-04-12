import { RegularListProps } from "../../../interfaces/RegularList/RegularList";

const RegularList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}: RegularListProps) => {
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </>
  );
};

export default RegularList;
