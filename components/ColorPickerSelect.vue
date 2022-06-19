<template>
<div class="wrapper-dropdown">
        <span @click="toggleDropdown()" v-html="selector">
</span>
<ul class="dropdown" v-if="active">
<li v-if="emptyOption" @click="setColor();">
        <span class="noColor" v-if="emptyOption !== 'true'">
        </span> {{emptyOption === "true" ? "" : emptyOption}}
</li>
<li v-for="color in colors" @click="setColor(color.hex, color.name)">
        <span :style="{background: color.hex}"></span> {{color.name}}
</li>
</ul>
        <input type="hidden" :name="inputId" :id="inputId" v-model="selectedColor">
</div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  data(){
    return {
			active: false,
			selectedColor: '',
			selectedColorName: '',
			colors: this.colorOptions,
			noSelection: true
			}
	},
  computed: {
  },
  	props: ['color-options', 'label', 'empty-option', 'input-id'],
      computed: {
		selector: function() {
			if(!this.selectedColor && !this.emptyOption) {
				return this.label;
			}
			else if(!this.selectedColor && this.emptyOption) {
				if(this.emptyOption === "true") {
					return this.label;
				}
				else if(this.emptyOption !== "true" && this.noSelection === false) {
					return '<span class="noColor"></span> ' + this.emptyOption;
				}
				else {
					return this.label;
				}
			}
			else {
				return '<span style="background: ' + this.selectedColor + '"></span> ' + this.selectedColorName;
			}
		}
	},
    methods: {
		setColor: function(color, colorName) {
			this.selectedColor = color;
			this.selectedColorName = colorName;
			this.active = false;
			this.noSelection = false;
			this.$emit('input', this.selectedColor);
		},
		toggleDropdown: function() {
			this.active = !this.active;
		},
	}
};
</script>

<style lang="scss" scoped>

</style>