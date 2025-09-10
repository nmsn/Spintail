import fs from 'fs';
import path from 'path';

// 动态获取组件源代码的工具函数
export async function getComponentCode(componentName: string): Promise<string> {
  try {
    // 构建组件文件路径
    const componentPath = path.join(process.cwd(), 'src', 'components', 'spinners', `${componentName}.tsx`);

    // 检查文件是否存在
    if (!fs.existsSync(componentPath)) {
      return `// 组件文件未找到: ${componentName}.tsx`;
    }

    // 读取文件内容
    const fileContent = fs.readFileSync(componentPath, 'utf-8');

    return fileContent;
  } catch (error) {
    console.error(`读取组件代码失败: ${componentName}`, error);
    return `// 读取组件代码失败: ${componentName}`;
  }
}

export default getComponentCode;