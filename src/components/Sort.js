import React from 'react';
import { Button } from './Buttons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames';

const SortActive = ({
	isSortReverse
}) =>
	<div>
		{isSortReverse
			? <FontAwesomeIcon icon={faArrowCircleUp} />
			: <FontAwesomeIcon icon={faArrowCircleDown} />
		}
	</div>

export const Sort = ({
	sortKey,
	activeSortKey,
	onSort,
	isSortReverse,
	children
}) => {
	const sortClass = classNames(
		'button-inline',
		{ 'button-active': sortKey === activeSortKey }
	);

	return (
		<div className="sorting">
			<Button
				onClick={() => onSort(sortKey)}
				className={sortClass}
			>
				{children}
			</Button>
			<div>&nbsp;</div>
			{sortKey === activeSortKey
				? <SortActive
					isSortReverse={isSortReverse}
				/>
				: null
			}
		</div>
	);
}