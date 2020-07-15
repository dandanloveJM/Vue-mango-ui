<template>
	<div>
		<g-button>默认按钮</g-button>
		<g-button icon="settings">默认按钮</g-button>
		<g-button :loading="true">默认按钮</g-button>
		<g-button disabled>默认按钮</g-button>

		<pre>
		<code>{{content}}</code>
	</pre>
	</div>


</template>

<script>
    import Button from '../../../src/components/Button'
    import {Component, Prop} from 'vue-property-decorator';
    const importAll = (requireContext) => requireContext.keys().forEach(requireContext);
    try {
        importAll(require.context('../assets/icons', true, /\.svg$/));
    } catch (error) {
        console.log(error);
    }

    export default {
        components: {
            gButton: Button
        },
        data() {
            return {
                content:
                    `
              <g-button>默认按钮</g-button>
              <g-button icon="settings">默认按钮</g-button>
              <g-button :loading="true">默认按钮</g-button>
               <g-button disabled>默认按钮</g-button>
              `
            }
        }
    }
</script>

<style scoped lang="scss">

</style>