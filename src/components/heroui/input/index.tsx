import React, { forwardRef } from 'react'
import { Input as InputHeroUI, InputProps as InputPropsHeroUI } from '@heroui/react'
import Icon from '@/components/icon'

export type InputProps = InputPropsHeroUI & {
  errorMessage?: string
  startIcon?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { errorMessage, startIcon, ...rest } = props

  return (
    <div>
      <InputHeroUI
        ref={ref}
        startContent={
          startIcon ? (
            <Icon
              icon={startIcon}
              width={18}
              height={18}
              className={!!errorMessage || props.isInvalid ? 'text-danger' : 'text-primary'}
            />
          ) : null
        }
        {...rest}
      />
      {errorMessage && <p className='-mb-2 ml-4 mt-1 text-xs text-danger'>{errorMessage}</p>}
    </div>
  )
})

Input.displayName = 'Input'
