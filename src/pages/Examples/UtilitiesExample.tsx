import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Heading, Toggle } from './Common';
import { CalenderExample, DragNDropExample, PickerExample, PopoverExample, UTILITIES_LIST } from './Utilities';

export default function UtilitiesExample() {
    const [searchParams] = useSearchParams();
    const [selected, setSelected] = useState(searchParams.get('component') || UTILITIES_LIST[0]);

    return (
        <div className="flex flex-col gap-2.5">
            <Heading title="Utilities Playground" />
            <Toggle selected={selected} onChange={setSelected} options={UTILITIES_LIST} />
            {selected === 'Calendar' && <CalenderExample />}
            {selected === 'Date Picker' && <PickerExample />}
            {selected === 'Drag N Drop' && <DragNDropExample />}
            {selected === 'Popover' && <PopoverExample />}
        </div>
    );
}
