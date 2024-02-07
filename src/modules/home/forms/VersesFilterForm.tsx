import { useForm } from "react-hook-form";
import { VersesFilterDto } from "./VersesFilterForm.type";
import { BuildFormUI } from "../../../common/CustomForms";
import versesFilterFormMeta from "./VersesFilterFormMeta";

const VersesFilterForm = () => {
  const rhf = useForm();

  const onSubmit = (payload: VersesFilterDto) => {
    console.log("payload", payload);
  };

  return (
    <BuildFormUI<VersesFilterDto>
      formHookReturn={rhf}
      formMeta={versesFilterFormMeta}
      onSubmit={onSubmit}
      isLoading={true}
      submitButtonText="Afficher"
    />
  );
};

export default VersesFilterForm;
