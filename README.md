# jQuery SumTableTotal Plugin by zealzhangz (https://github.com/zealzhangz/SumTableTotal)

# DISCLAIMER
This plugin a simple calculated total value for HTML table.The plugin was developed against Chrome.Because of the HTML table which can be combined in many different ways.The following table will work fine.Other types table may not work so well.
```html
<table>
    <thead>
        <tr>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
```

## Install - Bower

Install `bower` globally
```sh
npm install -g bower
```

Install jquery-sumtabletotal and dependencies
```
bower install jquery-sumtabletotal --save
```

Include jquery and sumtabletotal in your page
```html
<script src="bower_components\jquery\dist\jquery.min.js"></script>
<script src="bower_components\jquery-sumtabletotal\dist\jquery.sumtabletotal.min.js"></script>

## Using the plugin
```javascript
$("#yourHtmTable").sumtabletotal({
     totalIndexArry: [3, 4, 5],//You need to calculated the total of an columns array index
     rateObjectArry: [{numerator: 5, denominator: 4, index: 6}]//Object of calculated percentage,'index' represent the place to save percentage.
});
```