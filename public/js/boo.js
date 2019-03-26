$(' #f_write ').on('click', function() {
    
    var val = $(" input[name='main']:checked ").val();
    //add hidden value for temporary
    $(' #val_temp_flowchart ').append('<input type="hidden" class="val_temp_flowchart" name="val_temp_flowchart[]" value="'+val+'">');
    //add flow item on view
    $(' #temp_flowchart ').append(addItem(val));

});

$(' #generateNow ').on('click', function() {
    
    var val = $(' .val_temp_flowchart ').map(function(){return $(this).val();}).get();
    
    var parsingText = parsing_text(val);
    
    var diagram = flowchart.parse(parsingText).drawSVG('diagram');
    
});

function addItem(val) {

    if(val == 'process') {
        item = '<div class="input-group input-group-sm">'+
        '<div class="input-group-btn">'+
        '<button type="button" class="btn btn-primary">'+val+'</button>'+
        '</div>'+
        '<input type="text" class="form-control" placeholder="Description..">'+
        '</div>';
    } else {
        item = '<a href="#">'+val+'</a>';
    }
    
    return '<li>'+
        '<i class="fa fa-user bg-aqua"></i>'+
        '<div class="timeline-item">'+
            '<span class="time"><i class="fa fa-clock-o"></i> ..text</span>'+
            '<h3 class="timeline-header no-border">'+
                item +
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
  