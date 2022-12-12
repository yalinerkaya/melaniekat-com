const MY_FINGER =
  "https://nyan.lol/.well-known/webfinger?resource=acct:zicklepop@nyan.lol";

export default async function finger(_, res) {
  const data = await fetch(MY_FINGER);
  const json = await data.json();
  res.setHeader("content-type", "application/activity+json");
  res.status(200).json(json);
}
