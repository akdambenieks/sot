import React from 'react';

function ControlPanel ({onChangeForm = () => {}}) {
  return (
    <div className='control-panel'>
      <h1>Control Panel</h1>
      <form id='style-control'>

        <label htmlFor='backBgColor'><strong>Field Background Color:</strong></label>
        <input type='color' name='backBgColor' defaultValue='#FFFFFF' onChange={onChangeForm} />

        <label htmlFor='bgColor'><strong>Div Background Color:</strong></label>
        <input type='color' name='bgColor' defaultValue='#FFFFFF' onChange={onChangeForm} />

        <textarea type='text' name='innerText' onChange={onChangeForm} defaultValue='Default Text'/>

        <p><strong>Border Width</strong></p>
        <label htmlFor='borderWidthT'>Top:</label>
        <input type='number' step='0.5' min='0' name='borderWidthT' defaultValue='1' onChange={onChangeForm} />
        <label htmlFor='borderWidthR'>Right:</label>
        <input type='number' step='0.5' min='0' name='borderWidthR' defaultValue='1' onChange={onChangeForm} />
        <label htmlFor='borderWidthB'>Bottom:</label>
        <input type='number' step='0.5' min='0' name='borderWidthB' defaultValue='1' onChange={onChangeForm} />
        <label htmlFor='borderWidthL'>Left:</label>
        <input type='number' step='0.5' min='0' name='borderWidthL' defaultValue='1' onChange={onChangeForm} />

        <p><strong>Border Radius</strong></p>
        <label htmlFor='borderRadiusTL'>Top Left:</label>
        <input type='number' step='0.5' min='0' name='borderRadiusTL' defaultValue='0' onChange={onChangeForm} />
        <label htmlFor='borderRadiusTR'>Top Right:</label>
        <input type='number' step='0.5' min='0' name='borderRadiusTR' defaultValue='0' onChange={onChangeForm} />
        <label htmlFor='borderRadiusBR'>Bottom Right:</label>
        <input type='number' step='0.5' min='0' name='borderRadiusBR' defaultValue='0' onChange={onChangeForm} />
        <label htmlFor='borderRadiusBL'>Bottom Left:</label>
        <input type='number' step='0.5' min='0' name='borderRadiusBL' defaultValue='0' onChange={onChangeForm} />

        <p><strong>Border Color</strong></p>
        <label htmlFor='borderColorT'>Top:</label>
        <input type='color' name='borderColorT' defaultValue='#000000' onChange={onChangeForm} />
        <label htmlFor='borderColorR'>Right:</label>
        <input type='color' name='borderColorR' defaultValue='#000000' onChange={onChangeForm} />
        <label htmlFor='borderColorB'>Bottom:</label>
        <input type='color' name='borderColorB' defaultValue='#000000' onChange={onChangeForm} />
        <label htmlFor='borderColorL'>Left:</label>
        <input type='color' name='borderColorL' defaultValue='#000000' onChange={onChangeForm} />

        <p><strong>Border Style</strong></p>
        <label htmlFor='borderStyleT'>Top:</label>
        <select name='borderStyleT' onChange={onChangeForm}>
          <option value='solid' defaultValue >Solid</option>
          <option value='dashed' >Dashed</option>
          <option value='dotted' >Dotted</option>
          <option value='double' >Double</option>
          <option value='groove' >Groove</option>
          <option value='ridge' >Ridge</option>
          <option value='inset' >Inset</option>
          <option value='outset' >Outset</option>
          <option value='none' >None</option>
          <option value='hidden' >Hidden</option>
        </select>
        <label htmlFor='borderStyleR'>Right:</label>
        <select name='borderStyleR' onChange={onChangeForm}>
          <option value='solid' defaultValue >Solid</option>
          <option value='dashed' >Dashed</option>
          <option value='dotted' >Dotted</option>
          <option value='double' >Double</option>
          <option value='groove' >Groove</option>
          <option value='ridge' >Ridge</option>
          <option value='inset' >Inset</option>
          <option value='outset' >Outset</option>
          <option value='none' >None</option>
          <option value='hidden' >Hidden</option>
        </select>
        <label htmlFor='borderStyleB'>Bottom:</label>
        <select name='borderStyleB' onChange={onChangeForm}>
          <option value='solid' defaultValue >Solid</option>
          <option value='dashed' >Dashed</option>
          <option value='dotted' >Dotted</option>
          <option value='double' >Double</option>
          <option value='groove' >Groove</option>
          <option value='ridge' >Ridge</option>
          <option value='inset' >Inset</option>
          <option value='outset' >Outset</option>
          <option value='none' >None</option>
          <option value='hidden' >Hidden</option>
        </select>
        <label htmlFor='borderStyleL'>Left:</label>
        <select name='borderStyleL' onChange={onChangeForm}>
          <option value='solid' defaultValue >Solid</option>
          <option value='dashed' >Dashed</option>
          <option value='dotted' >Dotted</option>
          <option value='double' >Double</option>
          <option value='groove' >Groove</option>
          <option value='ridge' >Ridge</option>
          <option value='inset' >Inset</option>
          <option value='outset' >Outset</option>
          <option value='none' >None</option>
          <option value='hidden' >Hidden</option>
        </select>

      </form>
    </div>
  )
}

export default ControlPanel;
