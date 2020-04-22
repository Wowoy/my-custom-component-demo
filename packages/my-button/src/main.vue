<template>
   <button :type="htmlType" :class="classes">
        <span><slot></slot></span>
    </button>
</template>

<script>
const prefixCls = 'button';
  export default {
    name: "MyButton",
    props: {
        type: {
            default: 'default'
        },
        htmlType: {
            default: 'button'
        },
    },
    data () {
        return {
            
        };
    },
    computed: {
        classes () {
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}--${this.type}`]: !!this.type,
                }
            ];
        }
    },
}
</script>
<style>
.button {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    box-sizing: border-box;
    border: 1px solid transparent;
    white-space: nowrap;
    height: 36px;
    min-width: 76px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin: 0;
    padding: 0 16px;
    font-size: 14px;
    border-radius: 4px;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.button--default {
    color: #1a1a1a;
    background-color: #fff;
    border-color: #bfbfbf;
}
.button--default:hover {
    color: #6974ec;
    background-color: #fff;
    border-color: #6974ec;
}
.button--default:active {
    color: #1b2bda;
    background-color: #fff;
    border-color: #1b2bda;
}
.button--primary {
    color: #fff;
    background-color: #ff571a;
    border-color: #ff571a;
}
.button--primary:hover {
    color: #fff;
    background-color: #ff571a;
    border-color: #ff571a;
}
.button--primary:active {
    color: #fff;
    background-color: #ff571a;
    border-color: #ff571a;
}
</style>