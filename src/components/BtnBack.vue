<template>
			<div class="btn">
				<i class="material-icons md-size">arrow_back</i>
			</div>	
</template>
<style lang="scss" scoped>
	.btn{
		width:40px;
		height:40px;
		border-radius:40px;
		cursor:pointer;
		color:rgba(255,255,255,0.9);
		line-height:40px;
		display:flex;
		justify-content:center;
		&:hover,&:active{
			background:rgba(0,0,0,0.12);
		}
		.material-icons{
			line-height:inherit;
		}
	}
	
</style>