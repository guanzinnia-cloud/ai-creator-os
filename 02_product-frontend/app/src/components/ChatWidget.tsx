import { useEffect } from 'react'

// ============================================
// Dify Chatbot 配置
// 请替换为您的 Dify Chatbot Token
// ============================================
const DIFY_CONFIG = {
  token: 'le5nzqDHAgzeKS3A', // ← 替换为您的token
  inputs: {
    // 可以在这里定义Start节点的输入变量
  },
  systemVariables: {
    // user_id: '用户ID',
    // conversation_id: '会话ID（必须是UUID）',
  },
  userVariables: {
    // avatar_url: '用户头像URL',
    // name: '用户名称',
  },
}

export default function ChatWidget() {
  useEffect(() => {
    // 如果token未配置，不加载脚本
    if (DIFY_CONFIG.token === 'YOUR_DIFY_CHATBOT_TOKEN') {
      console.log('请在 ChatWidget.tsx 中配置 DIFY_CONFIG.token')
      return
    }

    // 避免重复加载
    if (document.getElementById(DIFY_CONFIG.token)) {
      return
    }

    // 设置 Dify 配置
    window.difyChatbotConfig = DIFY_CONFIG

    // 创建并加载 Dify 脚本
    const script = document.createElement('script')
    script.src = 'https://udify.app/embed.min.js'
    script.id = DIFY_CONFIG.token
    script.defer = true
    document.body.appendChild(script)

    // 添加自定义样式 - 使用更高的z-index确保始终在最上层
    const style = document.createElement('style')
    style.id = 'dify-custom-style'
    style.textContent = `
      #dify-chatbot-bubble-button {
        background: linear-gradient(135deg, #05D5FA, #4AF6FF) !important;
        box-shadow: 0 4px 20px rgba(5, 213, 250, 0.35) !important;
        width: 56px !important;
        height: 56px !important;
        border-radius: 50% !important;
        right: 32px !important;
        bottom: 32px !important;
        z-index: 99999 !important;
        position: fixed !important;
      }
      #dify-chatbot-bubble-button:hover {
        transform: scale(1.05) !important;
        box-shadow: 0 6px 24px rgba(5, 213, 250, 0.45) !important;
      }
      #dify-chatbot-bubble-window {
        width: 400px !important;
        height: 540px !important;
        border-radius: 16px !important;
        right: 32px !important;
        bottom: 100px !important;
        z-index: 99998 !important;
        position: fixed !important;
        background: #fff !important;
      }
      #dify-chatbot-bubble-window iframe {
        width: 100% !important;
        height: 100% !important;
        border: none !important;
        border-radius: 16px !important;
      }
      @media (max-width: 768px) {
        #dify-chatbot-bubble-button {
          right: 16px !important;
          bottom: 16px !important;
          width: 48px !important;
          height: 48px !important;
        }
        #dify-chatbot-bubble-window {
          width: calc(100vw - 32px) !important;
          height: 480px !important;
          right: 16px !important;
          bottom: 80px !important;
        }
      }
    `
    document.head.appendChild(style)

    return () => {
      // 清理
      const scriptToRemove = document.getElementById(DIFY_CONFIG.token)
      if (scriptToRemove) {
        document.body.removeChild(scriptToRemove)
      }
      const styleToRemove = document.getElementById('dify-custom-style')
      if (styleToRemove) {
        document.head.removeChild(styleToRemove)
      }
      delete window.difyChatbotConfig
    }
  }, [])

  // 这个组件不渲染任何内容，Dify会自动创建按钮和窗口
  return null
}

// 扩展 Window 接口
declare global {
  interface Window {
    difyChatbotConfig?: {
      token: string
      inputs?: Record<string, unknown>
      systemVariables?: Record<string, unknown>
      userVariables?: Record<string, unknown>
    }
  }
}
