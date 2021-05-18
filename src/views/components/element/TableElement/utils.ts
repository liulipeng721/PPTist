import { TableCellStyle } from '@/types/slides'

/**
 * 计算单元格文本样式
 * @param style 单元格文本样式原数据
 */
export const getTextStyle = (style?: TableCellStyle) => {
  if (!style) return {}
  const {
    bold,
    em,
    underline,
    strikethrough,
    color,
    backcolor,
    fontsize,
    fontname,
    align,
  } = style

  let textDecoration = `${underline ? 'underline' : ''} ${strikethrough ? 'line-through' : ''}`
  if (textDecoration === ' ') textDecoration = 'none'
  
  return {
    fontWeight: bold ? 'bold' : 'normal',
    fontStyle: em ? 'italic' : 'normal',
    textDecoration,
    color: color || '#000',
    backgroundColor: backcolor || '',
    fontSize: fontsize || '14px',
    fontFamily: fontname || '微软雅黑',
    textAlign: align || 'left',
  }
}