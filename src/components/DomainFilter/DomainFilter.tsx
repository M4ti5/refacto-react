import { connect } from "react-redux";
import { getDomains } from "../../redux/domains/selectors";
import { AppState } from "../../redux/store";

import { useEffect, useState } from "react";


interface State {
  countries: string[];
  classifications: string[];
  subClassifications: string[];
}

interface Props {
  domains?: string[];
}

export function DomainFilter(props: Props) {
  const { domains } = props;
  const [state, setState] = useState<State>({
    countries: [],
    classifications: [],
    subClassifications: [],
  });


  useEffect(() => {
    if (domains && domains.length > 0) { // Verification non null
      // Mise à l'interieur pour limité le cycle de vie en memoire
      const countries = new Set<string>();
      const classifications = new Set<string>();
      const subClassifications = new Set<string>();

      domains.forEach(domain => {
        const domains_splited: string[] = domain.split(/[-_]/); // [country,class,subclass]
        if (domains_splited.length === 3) { // Verification d'intégrité 
          countries.add(domains_splited[0]); // add() pour un set faire le controlle has en même temps
          classifications.add(domains_splited[1]);
          subClassifications.add(domains_splited[2]);
        }
      });

      setState({
        countries: Array.from(countries),
        classifications: Array.from(classifications),
        subClassifications: Array.from(subClassifications),
      });
    }
  }, [domains]);

  return (
    <>
      <select name="countries" multiple>
        {state.countries.map((country: string) => (
          <option value={country} key={"country_" + country}>
            {country}
          </option>
        ))}
      </select>
      <select name="classifications" multiple>
        {state.classifications.map((classification: string) => (
          <option value={classification} key={"class_" + classification}>
            {classification}
          </option>
        ))}
      </select>
      <select name="subClassifications" multiple>
        {state.subClassifications.map((subClassification: string) => (
          <option value={subClassification} key={"subclass_" + subClassification}>
            {subClassification}
          </option>
        ))}
      </select>
    </>
  );
}

const mapStateToProps = (state: AppState) => ({
  domains: getDomains(state),
});

export default connect(mapStateToProps)(DomainFilter);