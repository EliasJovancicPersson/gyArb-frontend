function WorkList() {
    return (
        <div class="container column-center">
		<div class="gyarb">

			<div id="backwards"></div>

			<div class="work-list"> <input type="number" name="page" id="page" value="1" min="1"/>
			</div>

			<div id="forwards"></div>

		</div>
		<a href="/src/html/work-upload.html" class="upload">
			<p>Ladda upp</p>
		</a>
	</div>
    )
}

export default WorkList