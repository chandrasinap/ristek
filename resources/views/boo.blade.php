@extends('layouts.app')

@section('customJS')
<script src="js/boo.js"></script>
@endsection

@section('content')
	<div class="box box-default">
        <div class="box-header with-border">
			<h3 class="box-title">Select2</h3>
			<div class="box-tools pull-right">
				<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
				<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-remove"></i></button>
			</div>
        </div>
			<div class="box-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label>Minimal</label>
							<select class="form-control select2" style="width: 100%;" name="val1">
								<option selected="selected">Alabama</option>
								<option>Alaska</option>
								<option>California</option>
								<option>Delaware</option>
								<option>Tennessee</option>
								<option>Texas</option>
								<option>Washington</option>
							</select>
						</div>
						<div class="form-group">
							<label>Minimal</label>
							<select class="form-control select2" style="width: 100%;" name="val2">
								<option selected="selected">Alabama</option>
								<option>Alaska</option>
								<option>California</option>
								<option>Delaware</option>
								<option>Tennessee</option>
								<option>Texas</option>
								<option>Washington</option>
							</select>
						</div>
					</div>
				</div>
			</div>
			<div class="box-footer">
				<center>
					<button type="submit" class="btn btn-danger">Generate Flowchart</button>	
				</center>
			</div>
      </div>
@endsection