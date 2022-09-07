import qs from 'qs';
import { UseProTableService } from '@/components/pro-table';

export const fetchPaginationList: UseProTableService<any> = async ({ current, pageSize }) => {
  const size = +pageSize || 10;
  return fetch(
    `https://oneapi.alibaba-inc.com/mock/whalebase/pro-table/pagination-list?${qs.stringify({
      current,
      pageSize,
    })}`,
  )
    .then((res) => res.json())
    .then(({ content }) => ({
      ...content,
      dataSource: content.dataSource
        .slice(0, size)
        .map((vo, index) => ({ ...vo, id: `id-${current * size + index}` })),
    }));
};
