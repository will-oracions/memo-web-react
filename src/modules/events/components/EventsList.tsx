import { useNavigate } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import {
  TableRow,
  TableRowType,
  CustomDatatable,
} from "../../../common/CustomDatatable";
import { CustomButton } from "../../../common/components";
import CustomPagination from "../../../common/components/CustomPagination";
import { Event } from "../event.model";

interface Props {
  events: Event[];
  loadingAction?: boolean;
  onSelectItem?: (entries: Event[]) => void;
  onDeleteItem?: (entry: Event) => void;
}

const EventsList = ({
  loadingAction,
  events,
  onDeleteItem,
  onSelectItem,
}: Props) => {
  const navigate = useNavigate();

  const th = ["name", "description", "actions"];

  const df: TableRow<any>[] = [
    {
      type: TableRowType.TEXT,
      dataKey: "name",
    },
    {
      type: TableRowType.TEXT,
      dataKey: "description",
    },
    {
      type: TableRowType.TEXT,
      dataKey: "order",
      setValue: (entry) => (
        <Flex>
          <CustomButton
            w="fit-content"
            onClick={() => navigate(`/events-edit/${entry.id}`)}
            variant="link"
            colorScheme="yellow">
            Modifier
          </CustomButton>
          {onDeleteItem && (
            <CustomButton
              w="fit-content"
              ml={2}
              onClick={() =>
                confirm(`Voulez vous vraiment supprimer ?`) &&
                onDeleteItem(entry)
              }
              variant="link"
              colorScheme="red">
              Supprimer
            </CustomButton>
          )}
        </Flex>
      ),
    },
  ];

  return (
    <>
      <CustomDatatable<Event>
        loadingAction={loadingAction}
        title="Leçons"
        // count={241}
        tableHead={th}
        tableRows={df}
        data={events}
        // actions={datatableActions}
        selectable={true}
        onSelect={onSelectItem}
        onFirstRowColClick={(entry) =>
          navigate(`/dashboard/students/events-list/${entry.id}`)
        }
      />

      <CustomPagination />
    </>
  );
};

export default EventsList;
