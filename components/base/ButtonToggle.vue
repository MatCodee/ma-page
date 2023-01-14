<template>
    <div class="container-button-toggle">
        <input type="checkbox" id="dark-mode-toggle" v-model="dark_mode_btn" />
        <label for="dark-mode-toggle">
            <svg class="sun" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                width="30px" height="30px" viewBox="0 0 512 512"  xml:space="preserve">
                <g>
                    <path class="st0" d="M256,118.125c-76.156,0-137.875,61.719-137.875,137.875S179.844,393.875,256,393.875
                        S393.875,332.156,393.875,256S332.156,118.125,256,118.125z"/>
                    <rect x="235.906" class="st0" width="40.156" height="77.297"/>
                    <rect x="235.906" y="434.703" class="st0" width="40.156" height="77.297"/>
                    
                        <rect x="63.657" y="82.229" transform="matrix(0.7071 0.7071 -0.7071 0.7071 102.3047 -42.376)" class="st0" width="77.296" height="40.15"/>
                    <polygon class="st0" points="368.156,396.547 422.828,451.219 451.219,422.813 396.563,368.156 	"/>
                    <rect y="235.906" class="st0" width="77.281" height="40.156"/>
                    <polygon class="st0" points="434.688,235.922 434.688,276.078 512,276.063 512,235.906 	"/>
                    <polygon class="st0" points="60.781,422.813 89.156,451.219 143.813,396.547 115.438,368.156 	"/>
                    <polygon class="st0" points="451.219,89.156 422.813,60.781 368.156,115.438 396.563,143.844 	"/>
                </g>
            </svg>
            <svg class="moon" fill="#000000" width="30px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>moon</title>
            <path d="M29.223 24.178l-0.021-0.057c-0.116-0.274-0.383-0.463-0.694-0.463-0.104 0-0.202 0.021-0.292 0.059l0.005-0.002c-1.272 0.542-2.752 0.857-4.306 0.857-6.213 0-11.25-5.037-11.25-11.25 0-4.66 2.833-8.658 6.871-10.366l0.074-0.028 0.211-0.089c0.267-0.118 0.45-0.381 0.45-0.687 0-0.375-0.276-0.686-0.635-0.74l-0.004-0.001c-0.653-0.103-1.407-0.161-2.174-0.161-8.145 0-14.748 6.603-14.748 14.748s6.603 14.748 14.748 14.748c4.748 0 8.973-2.244 11.67-5.73l0.025-0.034c0.097-0.125 0.155-0.285 0.155-0.458 0-0.127-0.031-0.246-0.086-0.351l0.002 0.004zM22.518 28.24c-1.497 0.637-3.238 1.007-5.066 1.007-7.317 0-13.249-5.932-13.249-13.249 0-7.074 5.543-12.853 12.523-13.23l0.034-0.001c-3.395 2.326-5.594 6.183-5.594 10.554 0 7.043 5.709 12.752 12.752 12.752 0.85 0 1.681-0.083 2.485-0.242l-0.081 0.013c-1.081 0.976-2.339 1.783-3.716 2.364l-0.087 0.033z"></path>
            </svg>
            
        </label>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dark_mode_btn: false,
        }
    },
    methods: {
        change_mode(value) {
            if(value) {
                this.$colorMode.preference = 'dark';
            }else {
                this.$colorMode.preference = 'light';
            }
        }
    },  
    watch: {
        dark_mode_btn(new_value,old_value) {
            this.change_mode(new_value);
        }
    }
}
</script>

<style lang="scss" scoped>
.container-button-toggle {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    label {
        width: 120px;
        height: 50px;
        position: relative;
        display: block;
        background-color: #ffffff;
        border-radius: 200px;
        box-shadow:  0px 5px 15px rgba(0,0,0,0.1);
        transition: .3s;
        cursor: pointer;
        &:after {
            content: "";
            width: 40px;
            height: 40px;
            position: absolute;
            top: 5px;
            left: 5px;
            background: linear-gradient(180deg, #ffcc89,rgb(244, 163, 42));
            border-radius: 180px;
            box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
            transition: .3s;
        }
        svg {
            position: absolute;
            top: 10px;
            z-index: 100;
        }
        .sun {
            left: 10px;
            fill: #fff;
            transition: 0.3s;
        }
        .moon {
            left: 80px;
            fill: #7e7e7e;
            transition: 0.3s;
        }

    }
    input {
        width: 0;
        height: 0;
        visibility: hidden;
        &:checked + label {
            background-color: #242424;
        }
        &:checked + label:after {
            left: 114px;
            transform: translateX(-100%);
            background: linear-gradient(180deg,#777,#3a4a4a)
        }
        &:checked + label svg.sun {
            fill: #7e7e7e;
        }
        &:checked + label svg.moon {
            fill: #fff;
        }
    }
}

</style>