export function HeroCard(props) {
  console.log(props);
  return <li> {props.hero.name} </li>;
}
