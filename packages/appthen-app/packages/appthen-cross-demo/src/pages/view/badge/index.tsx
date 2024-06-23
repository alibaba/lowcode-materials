import React from 'react'
import { AtBadge, AtButton } from 'disscode-lib'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class BadgePage extends React.Component {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI'
  }

  public render(): JSX.Element {
    const dot = '···'

    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Badge 徽标'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 数字 */}
          <View className='panel'>
            <View className='panel__title'>数字</View>
            <View className='panel__content'>
              <View className='badge-item'>
                <View className='subitem'>
                  <AtBadge value='10' maxValue={99}>
                    <AtButton size='small' circle>
                      按钮
                    </AtButton>
                  </AtBadge>
                </View>
                <View className='subitem'>
                  <AtBadge value='100' maxValue={99}>
                    <AtButton size='small'>按钮</AtButton>
                  </AtBadge>
                </View>
              </View>
            </View>
          </View>

          {/* 小红点 */}
          <View className='panel'>
            <View className='panel__title'>小红点</View>
            <View className='panel__content'>
              <View className='badge-item'>
                <View className='subitem'>
                  <AtBadge dot>
                    <AtButton size='small' circle>
                      按钮
                    </AtButton>
                  </AtBadge>
                </View>
                <View className='subitem'>
                  <AtBadge dot>
                    <AtButton size='small'>按钮</AtButton>
                  </AtBadge>
                </View>
              </View>
            </View>
          </View>

          {/* 文本 */}
          <View className='panel'>
            <View className='panel__title'>文本</View>
            <View className='panel__content'>
              <View className='badge-item'>
                <View className='subitem'>
                  <AtBadge value='NEW'>
                    <AtButton size='small' circle>
                      按钮
                    </AtButton>
                  </AtBadge>
                </View>
                <View className='subitem'>
                  <AtBadge value='NEW'>
                    <AtButton size='small'>按钮</AtButton>
                  </AtBadge>
                </View>
              </View>
            </View>
          </View>

          {/* 省略号 */}
          <View className='panel'>
            <View className='panel__title'>省略号</View>
            <View className='panel__content'>
              <View className='badge-item'>
                <View className='subitem'>
                  <AtBadge value={dot}>
                    <AtButton size='small' circle>
                      按钮
                    </AtButton>
                  </AtBadge>
                </View>
                <View className='subitem'>
                  <AtBadge value={dot}>
                    <AtButton size='small'>按钮</AtButton>
                  </AtBadge>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
