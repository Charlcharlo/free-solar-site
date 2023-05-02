import { terms } from "../../data/products";
import Feature from "../home/Feature";

export default function Terms() {
  return <Feature title="Terms and conditions" features={terms} icon="terms" />;
}
