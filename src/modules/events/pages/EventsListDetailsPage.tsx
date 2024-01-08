import { useParams } from "react-router-dom";
import { Card } from "@chakra-ui/react";
import { useEvent } from "../hooks/useEvent";
import Loader from "../../../common/components/Loader";
import { CustomAlert } from "../../../common/CustomForms";
import Markdown from "react-markdown";

const EventsListDetailsPage = () => {
  const params = useParams();

  console.log(params);
  const { data, loading, error } = useEvent({
    input: params.id as String, //"7fe7d488-685b-41dc-8266-df2214f3fa7f",
  });

  console.log("Data: ", data);

  if (loading) return <Loader />;
  if (error) return <CustomAlert>{error.message}</CustomAlert>;
  if (!data) return <CustomAlert>Cannot get event</CustomAlert>;

  return (
    <div>
      {/* <BackButton to="/dashboard/students/1234/subjects-list" /> */}
      <div className="text-sm text-slate-500 dark:text-slate-400 clmtf c7j98">
        Créee le {data.event.createdAt}
      </div>
      <header className="c958j">
        {/* Title */}
        <h1 className="text-slate-800 dark:text-slate-100 font-bold cy709 cjefr">
          {data?.event.name}
        </h1>
      </header>

      <hr className="border-slate-200 dark:border-slate-700 c87xd cdn8j" />

      <div>
        <Card p={{ base: 4, md: 10 }}>
          <div className="c3goj">
            <Markdown>{data?.event.description}</Markdown>
          </div>
        </Card>
      </div>

      <hr className="border-slate-200 dark:border-slate-700 c87xd cdn8j" />
    </div>
  );
};

export default EventsListDetailsPage;
