@extends('layouts.app')

@section('customJS')
<script src="js/boo.js"></script>
@endsection

@section('content')
	<div class="box box-default">

        <div class="box-header with-border">
			<h3 class="box-title">Select</h3>
			<div class="box-tools pull-right">
				<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
			</div>
        </div>
		
		<div class="box-body">
			<div class="row">
				
				<div class="col-lg-6">
					<div class="form-group">
						<div class="radio">
							<label><input type="radio" name="main" class="choice" value="start">Start</label>
						</div>
						<div class="radio">
							<label><input type="radio" name="main" class="choice" value="process">Process</label>
						</div>
						<div class="radio">
							<label><input type="radio" name="main" class="choice" value="end">End</label>
						</div>
					</div>
					<div class="box-footer">
						<center>
							<button id="f_write" type="submit" class="btn btn-primary">Write</button>
						</center>
						<div id="val_temp_flowchart"></div>
					</div>
				</div>

				<div class="col-lg-6">
					<ul class="timeline" id="temp_flowchart"></ul>
				</div>

			</div>
		</div>

		<div class="box-footer">
			<center><button id="generateNow" type="submit" class="btn btn-danger">Generate Flowchart</button></center>
		</div>
		
	</div>

	<div class="box box-default">
        <div class="box-header with-border">
			<center><h3 class="box-title"><b>Flowchart</b></h3></center>
			<div class="box-tools pull-right">
				<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
			</div>
        </div>
		<div class="box-body">
			<div class="row">	
				<div class="col-lg-12">
					
				</div>
			</div>
		</div>
	</div>
	
@endsection