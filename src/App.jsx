import "./App.css";
import "@shopify/polaris/build/esm/styles.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider } from "@shopify/polaris";
import Pricing from "./page/pricing";
function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <Pricing />
    </AppProvider>
  );
}

export default App;
