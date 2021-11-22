import './Widget.preview.css';
import { ReactComponent as CalcIcon } from '../Icons/calculator-icon.svg';
import { Widget } from '../../../Types/Widget';

interface Props {
  widget?: Widget
}

export const WidgetPreview: React.FC<Props> = ({ widget }) => {
  return (
    <div className="widget-pv-ctn">
      <div className="img-prv-ctn" role="widget-or-calc">{widget ? <CalcIcon /> : '+'}</div>
      <span role="widget-or-new">{widget ? widget.name : 'New widget'}</span>
    </div>
  );
}