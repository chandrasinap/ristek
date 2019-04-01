var counter_process = 0;

$(' #f_write ').on('click', function() {
    
    var val = $(" input[name='main']:checked ").val();
    var is_process = val == 'process' ? true : false;
    
    if(is_process) counter_process += 1;
    
    if(val) {
        //add hidden value for temporary
        $('#temporary').append('<input type="hidden" class="temporary_ordering" name="temporary_ordering[]" value="'+val+'">');

        if(is_process) $('#temporary').append('<input type="hidden" class="temporary_process" name="temporary_process['+counter_process+']">');
        
        //add flow item on view
        $('#temp_flowchart').append(addItem(val, counter_process));
    } else {
        alert('Choose one');
    }
    
});

$(' #generateNow ').on('click', function() {
    
    var ordering = $(' .temporary_ordering ').map(function(){return $(this).val();}).get();
    var process = $(' .temporary_process ').map(function(){return $(this).val();}).get();
    
    var parsingText = parsing_text(ordering, process);
    
    var diagram = flowchart.parse(parsingText).drawSVG('diagram');
    
});

function addItem(val, counter_process) {

    if(val == 'process') {
        item = '<div class="input-group input-group-sm">'+
            '<div class="input-group-btn">'+
                '<button type="button" class="btn btn-primary">'+val +' '+counter_process+'</button>'+
            '</div>'+
            '<input id="'+val+'_'+counter_process+'" type="text" class="form-control" placeholder="Description.." onkeyup="updateTemporaryProcess('+counter_process+')">'+
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

function updateTemporaryProcess (counter) {
    $(".temporary_process[name='temporary_process["+counter+"]']").val($('#process_'+counter).val());
}

function parsing_text (ordering, process) {
    var desc = [];
    var main = [];
    var ret = '';
    var idProcess = -1;

    desc.push('st=>start');
    main.push('st');
    console.log(process);
    $.each(ordering, function(k, v){
        if(v == 'process') {
            idProcess += 1;
            var var_pr = 'pr'+ k;
            desc.push(var_pr+'=>operation: '+process[idProcess]);
            main.push(var_pr);
        }
    });
    
    desc.push('e=>end');
    main.push('e');
    
    return desc.join("\n") + "\n\n" + main.join("->");
}
  