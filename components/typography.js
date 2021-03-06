export function MajorHeading(props) {
  return (
    <div className={'text-sm text-zinc-500 uppercase mb-4 ' + props.additionalClasses}>
      {props.content}
    </div>
  )
}

export function MinorHeading(props) {
  return (
    <div className="text-xs text-zinc-500 uppercase my-4">
      {props.content}
    </div>
  )
}

export function DataLabel(props) {
  return (
    <span className="text-zinc-500 text-sm" title={props.title}>
      {props.content}
    </span>
  )
}

export function DataValue(props) {
  return (
    <span className="font-space-mono">
      {props.content}
    </span>
  )
}

export function DataArray(props) {
  return (
    <span className="font-space-mono">
      {props.content && props.content.map((item, i) => (
        <span key={item}>{item}{i !== props.content.length-1 && ', '}</span>
      ))}
    </span>
  )
}
