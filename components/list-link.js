import PropTypes from 'prop-types'

const ListLink = ({
  className,
  postfix,
  prefix,
  rel,
  text,
  url,
  urlClassName,
}) => (
  <li className={`py-1 ${className}`}>
    {prefix}
    <a className={urlClassName} rel={rel} href={url}>
      {text}
    </a>
    {postfix}
  </li>
)

ListLink.propTypes = {
  className: PropTypes.string,
  postfix: PropTypes.string,
  prefix: PropTypes.string,
  rel: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
  urlClassName: PropTypes.string,
}

ListLink.defaultProps = {
  className: '',
  postfix: '',
  prefix: '',
  text: '',
  urlClassName: '',
}

export default ListLink
