export default function Map({ link, className }) {
  return <iframe src={link} frameborder="1" className={className}></iframe>;
}
