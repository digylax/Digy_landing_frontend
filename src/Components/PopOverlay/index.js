import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const PopOverlay = ({ id, trigger, popKey, placement, children, shiftTitle, shiftCont, weekOffTitle, weekOffCont }) => {
  return (
    <>
      <OverlayTrigger 
        id={id}
        trigger={trigger}
        key={popKey}
        placement={placement}
        overlay={
          <Popover>
            <Popover.Header className='fs-14'>
              {shiftTitle ? <><b>{shiftTitle}</b> Timing</> : <>{weekOffTitle}</>}
            </Popover.Header>
            <Popover.Body>
              {shiftCont ? <><b>{shiftCont}</b></> : <>{weekOffCont}</>}
            </Popover.Body>
          </Popover>
        }
      >
        <span className='d-inline-block' role='button'>
          {children}
        </span>
      </OverlayTrigger>
    </>
  )
};

export default PopOverlay;