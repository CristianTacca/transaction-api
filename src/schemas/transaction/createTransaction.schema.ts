import * as yup from "yup";

const createTransactionSchema = yup.object().shape({
  value: yup.number().required(),
  type: yup.string().lowercase().required(),
  description: yup.string().optional(),
  user: yup.number().required(),
});

export default createTransactionSchema;
