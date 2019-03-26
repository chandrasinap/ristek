$(' #f_write ').on('click', function() {
    
    var val = $(" input[name='main']:checked ").val();
    
    $(' #val_temp_flowchart ').append('<input type="hidden" class="val_temp_flowchart" name="val_temp_flowchart[]" value="'+val+'">');
    
    $(' #temp_flowchart ').append(addItem(val));

});

$(' #generateNow ').on('click', function() {
    
    var val = $(' .val_temp_flowchart ').map(function(){return $(this).val();}).get();
    
    var parsingText = parsing_text(val);
    
    var diagram = flowchart.parse(parsingText);
    
    diagram.drawSVG('diagram');
    
});

function addItem(val) {
    return '<li>'+
        '<i class="fa fa-user bg-aqua"></i>'+
        '<div class="timeline-item">'+
            '<span class="time"><i class="fa fa-clock-o"></i> ..text</span>'+
            '<h3 class="timeline-header no-border">'+
                '<a href="#">'+val+'</a><small><i> ..Description</i></small>'+
            '</h3>'+
        '</div>'+
    '</li>';
}

function parsing_text (val) {
    var desc = [];
    var main = [];
    var ret = '';
    
    desc.push('st=>start');
    main.push('st');
    
    $.each(val, function(k, v){
        if(v != 'start' && v != 'end') {
            var var_pr = 'pr'+ k;
            desc.push(var_pr+'=>operation');
            main.push(var_pr);
        }
    });
    
    desc.push('e=>end');
    main.push('e');
    
    return desc.join("\n") + "\n\n" + main.join("->");
}
  